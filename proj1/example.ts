import { cylinder, diff, extrude, poly, tile, union } from 'tscad';
import { rotate, translate } from 'tscad';
import { box, sphere } from 'tscad';


const hex = poly(6, 10);
const hexPlate = extrude(2, hex);
const cyl = cylinder(10, 20);

export const main = hexPlate;
