import { TestBed } from "@angular/core/testing";
import { Group5FoodComponent } from "./group5-food.component";


describe('Group5FoodComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Group5FoodComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Group5FoodComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'group5-food'`, () => {
    const fixture = TestBed.createComponent(Group5FoodComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('group5-food');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Group5FoodComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('group5-food app is running!');
  });
});
