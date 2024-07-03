import { Component, OnInit } from '@angular/core';
import { List } from '../interface/list';
import { ListService } from '../service/list.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { SinglePokemonComponent } from "../single-pokemon/single-pokemon.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  allList$!: Observable<List>;
  list: Promise<any> | undefined

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.allList$ = this.listService.getList();
    this.list = this.listService.getPokemonAsync();

  }

  trackByFn(index: number, item: { name: string; url: string }): number {
    return index;
  }
  
}
