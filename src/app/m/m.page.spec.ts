import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MPage } from './m.page';

describe('MPage', () => {
  let component: MPage;
  let fixture: ComponentFixture<MPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
