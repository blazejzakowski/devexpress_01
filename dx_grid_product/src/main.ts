import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';

// Załaduj HttpClientModule i dodatkowe konfiguracje, jeśli istnieją
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    // Tutaj można dodać dodatkowe moduły, jeśli są potrzebne, np. RouterModule
  ]
}).catch(err => console.error(err));
