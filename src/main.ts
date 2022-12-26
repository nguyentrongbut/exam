import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { Group5FoodComponentModule } from './group5-food/group5-food.component.module';

platformBrowserDynamic().bootstrapModule(Group5FoodComponentModule)
  .catch(err => console.error(err));
