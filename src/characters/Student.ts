import Phaser from 'phaser';

export default class Student extends Phaser.Physics.Arcade.Image {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture,
    frame?: string | number
  ) {
    super(scene, x, y, texture, frame);

    this.setScale(0.6);

    scene.add.existing(this);
  }
}
