import { Ref } from 'vue';

type coordinate = { x: number; y: number };

const RESOLUTION_MULTIPLIER = 2;

let lockMouse = false;

function distance(obj1: coordinate, obj2: coordinate) {
  const dx = obj1.x - obj2.x;
  const dy = obj1.y - obj2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

class Mouse {
  x: number;
  y: number;
  emit: any;
  points: Point[];
  instanceLock: boolean;
  constructor(x: number, y: number, emit: any, stepper: any, points: Point[]) {
    this.x = x;
    this.y = y;
    this.emit = emit;
    this.points = points;
    this.instanceLock = false;
    window.addEventListener('mousemove', (event) => {
      const rect = stepper.getBoundingClientRect();
      this.x = event.x - rect.left;
      this.y = event.y - rect.top;
    });
    window.addEventListener('click', (event) => {
      const rect = stepper.getBoundingClientRect();
      this.onClick({ x: event.x - rect.left, y: event.y - rect.top });
    });
  }
  onClick(cord: coordinate) {
    for (let i = 0; i < this.points.length; i++) {
      if (distance(cord, this.points[i]) < this.points[i].originalSize) {
        this.emit('changeActive', i);
      }
    }
  }
  update() {
    if (!lockMouse || this.instanceLock) {
      for (let i = 0; i < this.points.length; i++) {
        if (distance(this, this.points[i]) < this.points[i].originalSize) {
          document.body.style.cursor = 'pointer';
          lockMouse = true;
          this.instanceLock = true;
          return;
        }
      }
      if (this.instanceLock) {
        document.body.style.cursor = 'auto';
        lockMouse = false;
        this.instanceLock = false;
      }
    }
  }
}

class Point {
  id: number;
  x: number;
  y: number;
  size: number;
  activeSize: number;
  originalSize: number;
  changeSpeed: number;
  color: string;
  enableColor: string;
  disableColor: string;
  ctx: any;
  constructor(
    x: number,
    y: number,
    id: number,
    ctx: any,
    enableColor = '#0BC2A0',
    disableColor = '#CBD0CF'
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.size = 8;
    this.activeSize = 10;
    this.originalSize = this.size;
    this.enableColor = enableColor;
    this.disableColor = disableColor;
    this.color = this.disableColor;
    this.changeSpeed = 0.4;
    this.ctx = ctx;
  }
  draw(activePoint: Ref<number>, pointsLenght: number) {
    let color: string;
    let size: number;
    if (
      activePoint.value >= 0 &&
      activePoint.value < pointsLenght &&
      activePoint.value === this.id
    ) {
      color = this.enableColor;
      size = this.originalSize;
      this.ctx.strokeStyle = this.disableColor;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.activeSize, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.stroke();
    } else {
      color = this.color;
      size = this.size;
    }
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }
  update(mouse: Mouse) {
    if (distance(mouse, this) <= this.originalSize) {
      this.color = this.enableColor;
      if (this.size < 12) this.size += this.changeSpeed;
    } else {
      this.color = this.disableColor;
      if (this.size > this.originalSize) this.size -= this.changeSpeed;
    }
  }
}

export const initStepper = (
  id: string,
  width: number,
  height: number,
  steps: number,
  active: Ref<number>,
  emit: any,
  enableColor?: string,
  disableColor?: string
) => {
  const stepper: any = document.getElementById(id);

  stepper.width = width * RESOLUTION_MULTIPLIER;
  stepper.height = height * RESOLUTION_MULTIPLIER;

  stepper.style.width = `${width}px`;
  stepper.style.height = `${height}px`;

  stepper
    .getContext('2d')
    .scale(stepper.width / width, stepper.height / height);
  const ctx = stepper.getContext('2d');

  const points = [];

  const interval = width / steps;
  let coordinateX = interval / 2;

  for (let i = 0; i < steps; ++i) {
    points.push(
      new Point(coordinateX, height / 2, i, ctx, enableColor, disableColor)
    );
    coordinateX += interval;
  }

  const mouse = new Mouse(0, 0, emit, stepper, points);

  (function animate() {
    ctx.clearRect(0, 0, width, height);
    points.forEach((p) => {
      p.draw(active, points.length);
      p.update(mouse);
    });
    mouse.update();
    requestAnimationFrame(animate);
  })();
};
