import { HashLocationStrategy, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, contentChild, ContentChildren, ElementRef, QueryList, TemplateRef, viewChild, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-rendering',
  standalone: true,
  imports: [NgTemplateOutlet, NgFor],
  templateUrl: './template-rendering.component.html',
  styleUrl: './template-rendering.component.scss'
})
export class TemplateRenderingComponent {

  //region reusable template rendering

  @ViewChild('card', { static: true }) myCard!: TemplateRef<unknown>;

  @ViewChild('cardInsert', { read: ViewContainerRef }) cardInsert!: ViewContainerRef;

  @ViewChild('view', { static: true }) sample!: TemplateRef<unknown>
  @ViewChild('cards', { static: true }) cards!: TemplateRef<unknown>

  @ViewChild('multipleUsers', { static: true }) multipleUsers!: TemplateRef<unknown>

  @ViewChild('multiple', { read: ViewContainerRef }) addMultiple!: ViewContainerRef;


  // ngAfterViewInit() {
  //   console.log(this.myCard);

  // }

  details = [{
    name: 'harshini',
    role: 'developer',
    email: "har@gmail.com"
  },
  {
    name: 'abd',
    role: 'hvj',
    email: 'hjmb'
  }
  ]


  // cards = {
  name = 'harshini'
  role = 'developer'
  email = "har@gmail.com"
  // }
  // {
  //   name: 'abd',
  //   role: 'hvj',
  //   email: 'hjmb'
  // }
  // ]

  addUser() {
    this.cardInsert.createEmbeddedView(this.cards)
    const view = this.sample.createEmbeddedView({})
    console.log(view);

    this.cardInsert.insert(view)
    //this.cardInsert.remove(1)
  }

  addMultipleUsers() {
    this.details.forEach((op) => {
      this.addMultiple.createEmbeddedView(this.multipleUsers, {
        name: op.name,
        role: op.role,
        email: op.email
      })
    })
  }

  clear() {
    this.addMultiple.clear()
  }

  remove() {
    // console.log(this.addMultiple.length);

    const view = this.addMultiple.detach(0)
    console.log(view);

    console.log(this.addMultiple.length);

  }

  // region conetnt projection 

  // @ContentChild('header', { static: true }) header!: ElementRef
  // @ContentChild('body', { static: true }) body!: ElementRef
  // @ContentChild('footer', { static: true }) footer!: ElementRef

  // @ContentChild('content') content!: ElementRef;

  @ContentChildren('content') multipleContent!: QueryList<ElementRef>

  @ViewChild('viewcard', { static: true }) viewing!: TemplateRef<unknown>

  @ViewChild('contents', { read: ViewContainerRef }) contnt!: ViewContainerRef;
  ngAfterContentInit() {
    this.multipleContent.map((op) => {
      console.log(op.nativeElement);
    })
    //console.log(this.content.nativeElement.style);
    // this.header.nativeElement.style.backgroundColor = 'red'
    // this.body.nativeElement.style.color = 'pink'
    // this.footer.nativeElement.style.backgroundColor = 'orange'
  }


  show() {
    console.log("open");
    const ref = this.viewing.createEmbeddedView({})
    // console.log(ref);
    this.contnt.insert(ref)
    //  console.log(ref);
  }

  removecard() {
    this.contnt.remove(0)
  }

  // @ViewChild('temp') tmpView !: TemplateRef<unknown>
  @ContentChild('temp') tmplaView !: TemplateRef<unknown>


  @ViewChild('call', { read: ViewContainerRef }) call!: ViewContainerRef

  ngViewAfterInit() {
    console.log(this.tmplaView);
  }

  ngViewContentInit() {
    console.log(this.call);

  }

  dating = [
    {
      single: 'jwsefwefwh',
      dating: 'wefweeeeeeeeee'
    },
    {
      single: 'jhwef',
      dating: 'wefffff'
    },
    {
      single: 'jhwef',
      dating: 'wefvv'
    }

  ]
  showView() {
    //  console.log(this.tmplaView);
    this.dating.forEach((uh) => {
      this.contnt.createEmbeddedView(this.tmplaView, {
        single: uh.single,
        dating: uh.dating
      })
    })

  }
}
