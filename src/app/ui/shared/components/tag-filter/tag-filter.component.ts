import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {findElementIndex, removeElementAtIndex} from "../../../../lib";

@Component({
  selector: 'mn-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.scss']
})
export class TagFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public elements: string[];
  @Input()
  public selected: string[];

  @Output()
  public selectedChanges = new EventEmitter<string[]>()

  public selectTag(i: number): void {

    const selectedTag: string = this.elements[i]

    if (this.selected.includes(selectedTag)) {
      const indexTag = findElementIndex(selectedTag, this.selected);
      this.selected = removeElementAtIndex(indexTag, this.selected)
    }
    else {
      this.selected = new Array(...this.selected, selectedTag)
    }

    this.selectedChanges.emit(this.selected)
  }

}

