import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { JsonService } from 'app/services';

@Component({
  selector: 'app-render-img',
  templateUrl: './render-img.component.html',
  styleUrls: ['./render-img.component.css']
})
export class RenderImgComponent implements OnInit {

    constructor(private domSanitizer: DomSanitizer, private json : JsonService) { }

    _base64ToArrayBuffer(base64) {

        var binary_string =  window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array( len );
        for (var i = 0; i < len; i++)        {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }

    _base64ToTiff(base64)
    {
        var Tiff = require('tiff.js');
        var base64Image = this._base64ToArrayBuffer(base64);

        var tiff = new Tiff({buffer: base64Image});
        var width = tiff.width();
        var height = tiff.height();
        var canvas = tiff.toCanvas();
        if (canvas) {
              canvas.setAttribute('style', 'width:' + (width*0.4) +
                'px; height: ' + (height*0.3) + 'px');

              document.getElementById('tiff').appendChild(canvas);
        }
    }

    ngOnInit() {
        this.json.load_json().subscribe((res) => {
            this._base64ToTiff(res['base']);
        });
    }
}
