import { Component} from '@angular/core';
       
@Component({
    selector: 'app-root',
    template: `<child-comp>
                    <h3 #headerContent>Добро пожаловать {{name}}!</h3>
               </child-comp>`
})
export class AppComponent { 
 
    name: string = "Tom";
}