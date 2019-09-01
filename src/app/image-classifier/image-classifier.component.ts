import { Component, OnInit } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { Prediction } from '../prediction';

@Component({
  selector: 'app-image-classifier',
  templateUrl: './image-classifier.component.html',
  styleUrls: ['./image-classifier.component.css']
})

export class ImageClassifierComponent implements OnInit {
  imageSrc: string;
  img: any;
  prediction: Prediction
  predictionShow: any
  constructor() { }

  async ngOnInit() {
    this.img = await mobilenet.load();
  }

  async fileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = async (res: any) => {
        this.imageSrc = res.target.result;
        setTimeout(async () => {
          const imgEl = document.getElementById('img');
          let predictions = await this.img.classify(imgEl);
          console.log(predictions);
          this.prediction = predictions[0];
          this.predictionShow = true;
        }, 0);
      };
    }
  }
}
