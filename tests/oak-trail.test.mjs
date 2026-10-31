import test from 'node:test';
import assert from 'node:assert/strict';
import {oakTrail} from '../dist/oak-trail.js';
import {validateCourse,distance} from '../dist/core.js';
test('Oak Trail contains exactly the nine official holes, not neighboring Magnolia holes',()=>{validateCourse(oakTrail);assert.deepEqual(oakTrail.holes.map(h=>h.number),[1,2,3,4,5,6,7,8,9]);assert.deepEqual(oakTrail.holes.map(h=>h.par),[4,3,4,4,5,4,5,4,3]);assert.equal(oakTrail.holes.reduce((sum,h)=>sum+h.par,0),36);assert.equal(oakTrail.tees.white.reduce((sum,n)=>sum+n,0),2801);assert.equal(new Set(oakTrail.holes.map(h=>h.greenOsmId)).size,9);for(const h of oakTrail.holes){assert.ok(h.osmId>=1218092835&&h.osmId<=1218092843);assert.ok(distance(h.center,h.front)<40);assert.ok(distance(h.center,h.back)<40);assert.ok(distance(h.tee,h.front)<distance(h.tee,h.back));assert.ok(h.green.length>=4);}});
