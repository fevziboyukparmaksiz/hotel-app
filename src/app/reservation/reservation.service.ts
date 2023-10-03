import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000';
  private reservations: Reservation[] = [];
  //CRUD

  constructor(private httpClient: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.apiUrl}/reservations`);
  }

  getReservationById(id: string): Observable<Reservation> {
    return this.httpClient.get<Reservation>(this.apiUrl + '/reservation/' + id);
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.httpClient.post<void>(this.apiUrl + '/reservation/', reservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/reservation/' + id);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.httpClient.put<void>(this.apiUrl + '/reservation/' + id, updatedReservation);
  }
}
