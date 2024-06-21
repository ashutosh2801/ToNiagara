import { Component } from '@angular/core';
import { AppHttpService } from './services/app-http.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  /*public appPages = [
    { title: 'Niagara Falls Canada Tours', url: '/category/niagara-falls-canada-tours', icon: 'checkmark-done', 
      subPages: [
        { title: 'Niagara Falls Boat Tours', url: '/category/niagara-falls-boat-tours', icon: 'boat' },
        { title: 'Niagara Falls Tours Pickup From Toronto', url: '/category/niagara-falls-tours-pickup-from-toronto', icon: 'bus' },
        { title: 'Niagara Falls Private Tours', url: '/private-tours', icon: 'car-sport' },
        { title: 'Niagara Falls Tours Pickup From Brampton', url: '/category/niagara-falls-tours-pickup-from-brampton', icon: 'bus' },
        { title: 'Niagara Falls Tours Pickup From Mississauga', url: '/category/niagara-falls-tours-pickup-from-mississauga', icon: 'bus' },
        { title: 'Niagara Falls Tours Pickup From Oakville', url: '/category/niagara-falls-tours-pickup-from-oakville', icon: 'bus' },
        { title: 'Niagara Falls Tours Pickup From Hamilton', url: '/category/niagara-falls-tours-pickup-from-hamilton', icon: 'bus' },
        { title: 'Niagara Falls Tours Pickup From Niagara Falls & NOTL', url: '/category/niagara-falls-tours-pickup-from-niagara-falls-notl', icon: 'bus' }
      ],
    },
    { title: 'Toronto Tours', url: '/category/toronto-tours-1', icon: 'checkmark-done' },
    { title: '1000 Islands Tours', url: '/category/1000-islands-tours', icon: 'checkmark-done',
      subPages: [
        { title: '1000 Islands Private Tours', url: '/category/1000-islands-private-tours', icon: 'bus' },
        { title: '1000 Islands Boat Cruises', url: '/category/1000-islands-boat-tours', icon: 'boat' },
      ],
    },
    { title: 'Blue Mountain Tours', url: '/folder/Blue-Mountain-Tours', icon: 'checkmark-done' },
    { title: 'Blog', url: '/blog', icon: 'document' },
    { title: 'Contact Us', url: '/contact-us', icon: 'call' },
  ];*/
  public appPages:any;
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private apphttp: AppHttpService) {
    this.apphttp.get('menu.php').subscribe({
      next: (result: any) => {
        console.log(result);
        this.appPages = result;
      }, error: (err: any) => {
        // Error log
      }
    });
  }  

  subMenuOpen: any = {
    products: false,
    settings: false
    // Add more submenu toggles as needed
  };

  toggleSubMenu(menu: string) {
    this.subMenuOpen[menu] = !this.subMenuOpen[menu];
  }

  isSubMenuOpen(menu: string) {
    return this.subMenuOpen[menu];
  }
}
