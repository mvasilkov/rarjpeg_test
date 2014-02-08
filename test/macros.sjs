let describe = macro {
    rule { $n:lit { $c... } } =>
    { describe($n, function () { $c... }) }
}

let it = macro {
    rule { $n:lit { $c... } } =>
    { it($n, function () { $c... }) }

    rule { $n:lit ($done:ident) { $c... } } =>
    { it($n, function ($done) { $c... }) }
}

let => = macro {
    rule { { $c... } } =>
    { function (err) { assert.ifError(err); $c... } }

    rule { ($res:ident) { $c... } } =>
    { function (err, $res) { assert.ifError(err); $c... } }
}

export describe
export it
export =>
