QUnit.test("rule Function Test", function (assert) {
    //angleToSlope
    assert.ok(Math.abs(angleToSlope(45) - 1) < 0.01, 'angleToSlope 45');
    assert.ok(Math.abs(angleToSlope(30) - (Math.sqrt(3) / 3)) < 0.01, 'angleToSlope 30');
    assert.ok(Math.abs(angleToSlope(-30) - (-Math.sqrt(3) / 3)) < 0.01, 'angleToSlope -30');

    //randomInt
    for (var i = 0; i < 10; i++) {
        let min = Math.floor(Math.random() * 10 - 5);
        let max = Math.floor(Math.random() * 10 - 5);
        if (min >= max) {
            let t = min;
            min = max;
            max = min + 1;
        }
        let rdint = randomInt(min, max);
        assert.ok(rdint >= min && rdint <= max, `randomInt [{min},{max}]`);
    }

    //isCollided
    let rect1 = new GameObject(0, 0, 100, 100);
    let rect2 = new GameObject(50, 50, 100, 100);
    assert.ok(isCollided(rect1, rect2), 'isCollided true');
    rect2 = new GameObject(150, 150, 100, 100);
    assert.notOk(isCollided(rect1, rect2), 'isCollided false');

});