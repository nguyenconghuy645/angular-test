import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookDto } from '../dtos/books.dto';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
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
  deleteBooks(book: BookDto): void {
    this.bookService.delete(book.id).subscribe(
      res => {
        this.toastrService.success("Delete product successfully")
      },
      error => this.toastrService.error("Something went wrong!")
    )
  }
}
