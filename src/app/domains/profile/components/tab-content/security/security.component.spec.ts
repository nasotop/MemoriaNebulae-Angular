import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityComponent } from './security.component';
import { UserModel } from '../../../../../model/user.model';

describe('SecurityComponent', () => {
  let component: SecurityComponent;
  let fixture: ComponentFixture<SecurityComponent>;
  const testUser: UserModel = {
    id: 1,
    names: 'John',
    lastNames: 'Doe',
    username: 'johndoe',
    bio: 'Bio',
    email: 'test@example.com',
    password: 'oldPassword',
    isAdmin:false,
    birthDate: new Date()
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("userInfo", testUser);

    fixture.detectChanges();
  });

  it('should disable password fields initially and enable after changePassword(true)', () => {
    const pwdControl = component.form.get('profile_password')!;
    const confirmControl = component.form.get('profile_confirm_password')!;
    expect(pwdControl.disabled).toBeTrue();
    expect(confirmControl.disabled).toBeTrue();

    component.changePassword({ target: { checked: true } } as any);
    expect(pwdControl.disabled).toBeFalse();
    expect(confirmControl.disabled).toBeFalse();

    component.changePassword({ target: { checked: false } } as any);
    expect(pwdControl.disabled).toBeTrue();
    expect(confirmControl.disabled).toBeTrue();
  });

  it('should update localStorage entries on valid form submit', () => {
    const users = [{ ...testUser }];
    localStorage.setItem('users', JSON.stringify(users));

    component.form.get('profile_change_password')!.setValue(true);
    component.form.get('profile_password')!.enable();
    component.form.get('profile_confirm_password')!.enable();

    component.form.get('profile_mail')!.setValue('new@example.com');
    component.form.get('profile_password')!.setValue('newPass123');
    component.form.get('profile_confirm_password')!.setValue('newPass123');

    expect(component.form.valid).toBeTrue();

    component.onSubmit();

    const actualUser = JSON.parse(localStorage.getItem('actualUser')!);
    expect(actualUser.email).toBe('new@example.com');
    expect(actualUser.password).toBe('newPass123');

    const updatedUsers = JSON.parse(localStorage.getItem('users')!);
    expect(updatedUsers[0].email).toBe('new@example.com');
    expect(updatedUsers[0].password).toBe('newPass123');
  });
});
