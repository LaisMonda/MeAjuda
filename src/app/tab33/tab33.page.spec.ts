import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab33Page } from './tab33.page';

describe('Tab3Page', () => {
  let component: Tab33Page;
  let fixture: ComponentFixture<Tab33Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab33Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab33Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
