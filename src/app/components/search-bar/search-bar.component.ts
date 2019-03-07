import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AutocompleteFilterService } from './../../services/autocomplete-filter.service';
export interface Post {
    id: number,
    title: string,
    body: string
}
@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    myControl = new FormControl();
    filteredOptions: Observable<string[]>;
    allPosts: Post[];
    autoCompleteList: any[]

    @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
    @Output() onSelectedOption = new EventEmitter();
    @Output() onSearchInput = new EventEmitter();
    @Input() movies_data;
    @Input() searchbarWidth;

    constructor(
        public autoCompleteService: AutocompleteFilterService
    ) { }

    ngOnInit() {

        // get all posts
        this.allPosts = this.movies_data;

        // when user types something in input, the value changes will come through this
        this.myControl.valueChanges.subscribe(userInput => {
            this.autoCompleteExpenseList(userInput);
        })
    }

    private autoCompleteExpenseList(input) {
        let categoryList = this.filterCategoryList(input)
        this.autoCompleteList = categoryList;
    }

    // this is where filtering the data happens according to you typed value
    filterCategoryList(val) {
        var categoryList = []
        if (typeof val != "string") {
            return [];
        }
        if (val === '' || val === null) {
            this.onSearchInput.emit(this.allPosts)
            return [];
        }
        // const newList = val ? this.allPosts.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()) != -1) //filter if the val is contained
        const newList = val ? this.allPosts.filter(s => s.title.toLowerCase().startsWith(val.toLowerCase()) != false) //filter if the title starts with the val
            : this.allPosts;
        this.onSearchInput.emit(newList)
        return newList;
    }

    // after you clicked an autosuggest option, this function will show the field you want to show in input
    displayFn(post: Post) {
        let k = post ? post.title : post;
        return k;
    }

    filterPostList(event) {
        var posts = event.source.value;
        console.log('posts ', posts);
        console.log('searchOption: ', this.autoCompleteService.searchOption);
        if (!posts) {
            this.autoCompleteService.searchOption = []
        }
        else {
            this.autoCompleteService.searchOption.push(posts);
            this.onSelectedOption.emit(this.autoCompleteService.searchOption)
        }
        this.focusOnPlaceInput();
    }

    removeOption(option) {

        let index = this.autoCompleteService.searchOption.indexOf(option);
        if (index >= 0)
            this.autoCompleteService.searchOption.splice(index, 1);
        this.focusOnPlaceInput();

        this.onSelectedOption.emit(this.autoCompleteService.searchOption)
    }

    // focus the input field and remove any unwanted text.
    focusOnPlaceInput() {
        this.autocompleteInput.nativeElement.focus();
        this.autocompleteInput.nativeElement.value = '';
    }
}