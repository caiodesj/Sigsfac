import { CoreModule } from './core/core.module';
import { LayoutModule } from './core/layout/layout.module';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/modules/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { UploadComponent } from './features/reports/ras-report/shared/upload/upload.component';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { MatTableExporterModule } from 'mat-table-exporter';

import { provideDatabase, getDatabase } from '@angular/fire/database';

// Configuração do Firestore
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { TabelaRegistroComponent } from './shared/tabela-registro/tabela-registro.component';

import { HttpClientModule } from '@angular/common/http';
import { BottomSheetComponent } from './shared/bottom-sheet/bottom-sheet.component';

//configuração do Firebase

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    UploadComponent,
    TabelaRegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
    AngularFirestoreModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatNativeDateModule,
    HttpClientModule,
    LayoutModule,
    CoreModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
