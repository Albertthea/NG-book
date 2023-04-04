Привязка элемента DOM к значению компонента (односторонняя)
<h1>Добро пожаловать {{name}}!</h1>


Привязка свойства элемента DOM к значению компонента (односторонняя)
<input type="text" [value]="name" />


Привязка метода компонента к событию в DOM (генерация события в DOM вызывает метод на компоненте)(односторонняя)
<button (click)="addItem(text, price)">Добавить</button>


Двусторонняя привязка, когда элемент DOM привязан к значению на компоненте, при этом изменения на одном конце привязки сразу приводят к изменениям на другом конце
<input [(ngModel)]="name" placeholder="name">


привязка именно к атрибуту хтмл документа. префикса attr
[attr.название_атрибута]="значение"



Привязка к классу CSS имеет следующую форму:
[class.имя_класса]="true/false"

После префикса class через точку указывается имя класса, которое мы хотим добавить или удалить. Причем привязка идет к логическому значению. Если равно true, то класс применяется, если false - то класс не применяется. 

Привязка стилей имеет следующий синтаксис:
[style.стилевое_свойство]="выражение ? A : B"
