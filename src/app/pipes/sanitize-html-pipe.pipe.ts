import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtmlPipe'
})
export class SanitizeHtmlPipePipe implements PipeTransform {

   constructor(private _sanitizer:DomSanitizer) {}

   transform(value: string, ...args: unknown[]): SafeHtml {
      return this._sanitizer.bypassSecurityTrustHtml(value);;
   }

}
