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

    const chance: Chance.Chance = new Chance('wave-wave');

    it('should be able to construct', (): void => {

        const wave: Wave = Wave.create({});

        expect(wave).to.be.instanceOf(Wave);
    });

    it('should be able to get data', (): void => {

        const key: string = chance.string();
        const value: string = chance.string();

        const wave: Wave = Wave.create({
            [key]: value,
        });

        expect(wave.data).to.be.deep.equal({
            [key]: value,
        });
    });
});
