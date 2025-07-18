import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LoginFormComponent } from './login-form/login-form.component';
import { CardComponent } from '../../../shared/ui/card/card/card.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let httpMock: HttpTestingController;
  const testUrl = 'https://nasotop.github.io/Archivos-JSON/Usuarios.json';

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        LoginFormComponent,
        CardComponent,
        HttpClientTestingModule,
      ],
      providers: [{ provide: [Router], useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    localStorage.removeItem('users');
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.removeItem('users');
  });

  it('should fetch and store users on init when none exist', () => {
    component.ngOnInit();
    const req = httpMock.expectOne(testUrl);
    expect(req.request.method).toBe('GET');
    const dummy = [
      {
        id: '1',
        names: 'A',
        lastNames: 'B',
        username: 'C',
        bio: '',
        email: 'a@b.com',
        password: 'p',
      },
    ];
    req.flush(dummy);
    const stored = JSON.parse(localStorage.getItem('users')!);
    expect(stored).toEqual(dummy);
  });

  it('should not fetch users on init when localStorage has data', () => {
    const initial = JSON.stringify([{}]);
    localStorage.setItem('users', initial);
    component.ngOnInit();
    httpMock.expectNone(testUrl);
    expect(localStorage.getItem('users')).toBe(initial);
  });
});
