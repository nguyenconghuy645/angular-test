import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookDto } from '../dtos/books.dto';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  bookDto!: BookDto;
  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.bookService.getById(this.id).subscribe(
      res => this.bookDto = res
    )
  }
}
