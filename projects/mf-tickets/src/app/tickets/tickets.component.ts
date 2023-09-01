import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import { ITickets } from '../model/ITickets';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  tickets: ITickets[] = []

  constructor(private ticketsService: TicketsService) {}

  ngOnInit(): void {
      this.getTickets()
  }

  getTickets() {
    this.ticketsService.getTickets().subscribe({
      next: (res) => this.tickets = res
    })
  }
}
