import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContatoComponent } from './perfil-contato.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

describe('PerfilContatoComponent', () => {
  let component: PerfilContatoComponent;
  let fixture: ComponentFixture<PerfilContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilContatoComponent, CommonModule, RouterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
