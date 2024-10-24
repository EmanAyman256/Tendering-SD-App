import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainitemsComponent } from './components/mainitems/mainitems.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/mainitems/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundamentalNgxCoreModule, MessageToastModule } from '@fundamental-ngx/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import {AuthInterceptor} from './auth/auth.interceptor'
import { SplitButton, SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { CheckboxModule } from 'primeng/checkbox';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthConfig, OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { TruncateWordsPipe } from './pipes/truncate-words.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { ConfirmationService } from 'primeng/api'; 
import { ConfirmDialogModule } from 'primeng/confirmdialog';  // Import ConfirmDialogModule

@NgModule({
  declarations: [
    AppComponent,
    MainitemsComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    TruncateWordsPipe,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FundamentalNgxCoreModule,
    TableModule,
    ButtonModule,
    CardModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    SplitterModule,
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    InputNumberModule,
    MenuModule,
    ConfirmDialogModule,
    MessageToastModule,
    ToastModule,
    OAuthModule.forRoot()
  

  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS ,
    useClass:AuthInterceptor,
    multi:true
  },
]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { 
}
