import { Easing } from '../easing';

describe('Easing', () => {
  it('Linear None should properly scale easing progress', () => {
    expect(Easing.Linear.None(0.2)).toEqual(0.2);
  });

  it('Quadratic In should properly scale easing progress', () => {
    expect(Easing.Quadratic.In(0.2)).toEqual(0.04000000000000001);
  });

  it('Quadratic Out should properly scale easing progress', () => {
    expect(Easing.Quadratic.Out(0.2)).toEqual(0.36000000000000004);
  });

  it('Quadratic InOut should properly scale easing progress', () => {
    expect(Easing.Quadratic.InOut(0.2)).toEqual(0.08000000000000002);
    expect(Easing.Quadratic.InOut(0.6)).toEqual(0.6799999999999999);
  });

  it('Cubic In should properly scale easing progress', () => {
    expect(Easing.Cubic.In(0.2)).toEqual(0.008000000000000002);
  });

  it('Cubic Out should properly scale easing progress', () => {
    expect(Easing.Cubic.Out(0.2)).toEqual(0.4879999999999999);
  });

  it('Cubic InOut should properly scale easing progress', () => {
    expect(Easing.Cubic.InOut(0.2)).toEqual(0.03200000000000001);
    expect(Easing.Cubic.InOut(0.6)).toEqual(0.744);
  });

  it('Quartic In should properly scale easing progress', () => {
    expect(Easing.Quartic.In(0.2)).toEqual(0.0016000000000000005);
  });

  it('Quartic Out should properly scale easing progress', () => {
    expect(Easing.Quartic.Out(0.2)).toEqual(0.5903999999999998);
  });

  it('Quartic InOut should properly scale easing progress', () => {
    expect(Easing.Quartic.InOut(0.2)).toEqual(0.012800000000000004);
    expect(Easing.Quartic.InOut(0.6)).toEqual(0.7951999999999999);
  });

  it('Quintic In should properly scale easing progress', () => {
    expect(Easing.Quintic.In(0.2)).toEqual(0.00032000000000000013);
  });

  it('Quintic Out should properly scale easing progress', () => {
    expect(Easing.Quintic.Out(0.2)).toEqual(0.6723199999999998);
  });

  it('Quintic InOut should properly scale easing progress', () => {
    expect(Easing.Quintic.InOut(0.2)).toEqual(0.005120000000000002);
    expect(Easing.Quintic.InOut(0.6)).toEqual(0.8361599999999999);
  });

  it('Sinusoidal In should properly scale easing progress', () => {
    expect(Easing.Sinusoidal.In(0.2)).toEqual(0.04894348370484647);
  });

  it('Sinusoidal Out should properly scale easing progress', () => {
    expect(Easing.Sinusoidal.Out(0.2)).toEqual(0.3090169943749474);
  });

  it('Sinusoidal InOut should properly scale easing progress', () => {
    expect(Easing.Sinusoidal.InOut(0.2)).toEqual(0.09549150281252627);
  });

  it('Exponential In should properly scale easing progress', () => {
    expect(Easing.Exponential.In(0)).toEqual(0);
    expect(Easing.Exponential.In(0.2)).toEqual(0.0039062499999999987);
  });

  it('Exponential Out should properly scale easing progress', () => {
    expect(Easing.Exponential.Out(0.2)).toEqual(0.75);
    expect(Easing.Exponential.Out(1)).toEqual(1);
  });

  it('Exponential InOut should properly scale easing progress', () => {
    expect(Easing.Exponential.InOut(0)).toEqual(0);
    expect(Easing.Exponential.InOut(0.2)).toEqual(0.007812500000000002);
    expect(Easing.Exponential.InOut(0.6)).toEqual(0.875);
    expect(Easing.Exponential.InOut(1)).toEqual(1);
  });

  it('Circular In should properly scale easing progress', () => {
    expect(Easing.Circular.In(0.2)).toEqual(0.020204102886728803);
  });

  it('Circular Out should properly scale easing progress', () => {
    expect(Easing.Circular.Out(0.2)).toEqual(0.5999999999999999);
  });

  it('Circular InOut should properly scale easing progress', () => {
    expect(Easing.Circular.InOut(0.2)).toEqual(0.041742430504416006);
    expect(Easing.Circular.InOut(0.6)).toEqual(0.7999999999999999);
  });

  it('Elastic In should properly scale easing progress', () => {
    expect(Easing.Elastic.In(0)).toEqual(0);
    expect(Easing.Elastic.In(0.2)).toEqual(0.00390625);
    expect(Easing.Elastic.In(1)).toEqual(1);
  });

  it('Elastic Out should properly scale easing progress', () => {
    expect(Easing.Elastic.Out(0)).toEqual(0);
    expect(Easing.Elastic.Out(0.2)).toEqual(1.25);
    expect(Easing.Elastic.Out(1)).toEqual(1);
  });

  it('Elastic InOut should properly scale easing progress', () => {
    expect(Easing.Elastic.InOut(0)).toEqual(0);
    expect(Easing.Elastic.InOut(0.2)).toEqual(-0.0078125);
    expect(Easing.Elastic.InOut(0.6)).toEqual(1.125);
    expect(Easing.Elastic.InOut(1)).toEqual(1);
  });

  it('Back In should properly scale easing progress', () => {
    expect(Easing.Back.In(0.2)).toEqual(-0.04645056000000001);
  });

  it('Back Out should properly scale easing progress', () => {
    expect(Easing.Back.Out(0.2)).toEqual(0.7058022399999999);
  });

  it('Back InOut should properly scale easing progress', () => {
    expect(Easing.Back.InOut(0.2)).toEqual(-0.092555656);
    expect(Easing.Back.InOut(0.6)).toEqual(0.9100742079999999);
  });

  it('Bounce In should properly scale easing progress', () => {
    expect(Easing.Bounce.In(0.2)).toEqual(0.06000000000000005);
  });

  it('Bounce Out should properly scale easing progress', () => {
    expect(Easing.Bounce.Out(0.2)).toEqual(0.30250000000000005);
    expect(Easing.Bounce.Out(0.6)).toEqual(0.7725);
    expect(Easing.Bounce.Out(0.8)).toEqual(0.94);
    expect(Easing.Bounce.Out(0.92)).toEqual(0.9934);
  });

  it('Bounce InOut should properly scale easing progress', () => {
    expect(Easing.Bounce.InOut(0.2)).toEqual(0.11375000000000002);
    expect(Easing.Bounce.InOut(0.6)).toEqual(0.6512499999999999);
  });
});
