import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInformationComponent } from './personal-information.component';
import { UserModel } from '../../../../../model/user.model';

describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;
  const testUser: UserModel = {
    id: 1,
    names: 'Alice',
    lastNames: 'Smith',
    username: 'alice123',
    bio: 'Hello world',
    email: 'alice@example.com',
    password: 'pass',
    birthDate: new Date(),
    isAdmin: false
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInformationComponent);
    fixture.componentRef.setInput("userInfo", testUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should initialize form with userInfo values', () => {
    const form = component.form;
    expect(form.get('profile_name')!.value).toBe(testUser.names);
    expect(form.get('profile_last_name')!.value).toBe(testUser.lastNames);
    expect(form.get('profile_username')!.value).toBe(testUser.username);
    expect(form.get('profile_bio')!.value).toBe(testUser.bio);
    expect(form.valid).toBeTrue();
  });

  it('should update localStorage on valid form submit', () => {
    // Setup initial users list
    const users = [{ ...testUser }];
    localStorage.setItem('users', JSON.stringify(users));

    // Change form values
    component.form.get('profile_name')!.setValue('Bob');
    component.form.get('profile_last_name')!.setValue('Jones');
    component.form.get('profile_username')!.setValue('bobjones');
    component.form.get('profile_bio')!.setValue('New bio');

    expect(component.form.valid).toBeTrue();
    component.onSubmit();

    // Verify actualUser updated
    const actualUser = JSON.parse(localStorage.getItem('actualUser')!);
    expect(actualUser.names).toBe('Bob');
    expect(actualUser.lastNames).toBe('Jones');
    expect(actualUser.username).toBe('bobjones');
    expect(actualUser.bio).toBe('New bio');

    // Verify users list updated
    const updatedUsers = JSON.parse(localStorage.getItem('users')!);
    expect(updatedUsers.length).toBe(1);
    expect(updatedUsers[0].names).toBe('Bob');
    expect(updatedUsers[0].lastNames).toBe('Jones');
    expect(updatedUsers[0].username).toBe('bobjones');
    expect(updatedUsers[0].bio).toBe('New bio');
  });
});
