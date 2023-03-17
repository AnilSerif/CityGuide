import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/Modals/Summary';
import { Blog } from 'src/app/Modals/blog';
import { SummaryService } from 'src/app/services/summary.service';
import { List } from 'src/app/Modals/list';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers:[SummaryService]
})
export class SummaryComponent implements OnInit {

  constructor(private summaryService:SummaryService,
    private activatedRoute:ActivatedRoute) { }

  summaries:Summary[];
  blogs:Blog[];
  lists:List[];
 

    
  ngOnInit() {

    

    this.summaryService.GetSummary().subscribe({
      next:(summaries)=>{
        this.summaries = summaries;
        
      },
      error:(summaries)=>{
        console.log(summaries);
      }
    })

  


    this.summaryService.GetBlog().subscribe({
      next:(blogs)=>{
        this.blogs = blogs;
      },
      error:(blogs)=>{
        console.log(blogs);
      }
    })

    this.summaryService.GetList().subscribe({
      next:(lists)=>{
        this.lists = lists;
      },
      error:(lists)=>{
        console.log(lists);
      }
    })

  }

  

}
