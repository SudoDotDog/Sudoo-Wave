/**
 * @author WMXPY
 * @namespace Wave
 * @description Wave
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Wave } from '../../src';

describe('Given {Wave} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('wave-wave');

    it('should be able to construct', (): void => {

        const wave: Wave = Wave.create({});

        expect(wave).to.be.instanceOf(Wave);
    });
});
