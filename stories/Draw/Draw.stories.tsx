import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Circle from './Components/Circle';
import DrawCircle from './Components/DrawCircle';
import DrawPolygon from './Components/DrawPolygon';
import DrawRect from './Components/DrawRect';

storiesOf('绘制', module)
  .add('圆', () => <Circle />, {})
  .add('绘制圆', () => <DrawCircle />, {})
  .add('四边形', () => <DrawRect />, {})
  .add('绘制面', () => <DrawPolygon />, {});
