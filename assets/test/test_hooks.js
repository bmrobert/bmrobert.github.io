var
  hooks = require('hooks');

hooks.beforeAll(function (done) {
  done();
});

hooks.afterAll(function (done) {
  done();
});


hooks.before('GET /stores -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'HkSoNmOeihsUfcgWy9597+GHqsu8jhhS+4JFQUZ1eS8=';
  test.request.query.lowerRightBound = '41.885853,-87.623400';
  test.request.query.upperLeftBound = '41.886811,-87.625624';
  done();
});

hooks.before('GET /stores -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd} -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'G+oC+/B+/kDD8w4UJHRWF+4hL0BcFrdUbXi/8L30GnY=';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd} -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/performance -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'ar3IOggON7pDzTgb2o/XxYsUjdkJlIYKKK+iWYyNB9s=';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/performance -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/opportunities -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = '+dfU4zYrWYVt+xR4CRtRpyjOoZiX7oP3X38tPPGIFX4=';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/opportunities -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/packagePerformance -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'VRrnMq0f0gDzX8nN2lZ9QGYhrNKb7UsQhypAxNMqURE=';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/packagePerformance -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/storePerformance -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'jDAX4M1sgZb2oSSYn2EFmQoDQAdbUMI1ZuvJMtk2toE=';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/storePerformance -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/contacts -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'Nazfjv7dQbCXkTjQrttZO70OmqtuhhTNW2QEC/i/vlU=';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/contacts -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/itemAuthorizations -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'LHiodlA37bOoptgofzC7rDYyrkTdbCG294gsQz2gLxc=';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/itemAuthorizations -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/features -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = '3UkfGoVxyIfNq5ppVAvMfqqhEbyk5iLEuuDQ01R7Lrw=';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/features -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/recommendations/feedback -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'z2E8XTOjV+3TuJnJ7g8eUKTEDhsl0wa4MwdKPpes1sA=';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /stores/{tdlinx_store_cd}/recommendations/feedback -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  test.request.params.tdlinx_store_cd = '5219018';
  done();
});

hooks.before('GET /distributors/{distributor_cd}/packagePerformance -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'c3hH87WXOQCW0Tl1VJQbtyv/YTtU5RYtRf1XiccU1vU=';
  test.request.params.distributor_cd = '2224549';
  done();
});

hooks.before('GET /distributors/{distributor_cd}/packagePerformance -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  test.request.params.distributor_cd = '2224549';
  done();
});

hooks.before('GET /distributors/{distributor_cd}/distributorPerformance -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'JY/fLK8XaRaa8WZdRBjyzWM82fP173AnEqMkHN8oxIQ=';
  test.request.params.distributor_cd = '2224549';
  done();
});

hooks.before('GET /distributors/{distributor_cd}/distributorPerformance -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  test.request.params.distributor_cd = '2224549';
  done();
});

hooks.skip('POST /feedback -> 200');

hooks.before('POST /feedback -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  done();
});

hooks.skip('POST /filters/stores/products -> 200');

hooks.before('POST /filters/stores/products -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  done();
});

hooks.skip('POST /brands/performanceLevels -> 200');

hooks.before('POST /brands/performanceLevels -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  done();
});

hooks.before('GET /beerStores -> 200', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'AziYxd1PhDbUvQIAjSBfgb5fs3nsAHeO848/Y4j3FDg=';
  test.request.query.lowerRightBound = '41.885853,-87.623400';
  test.request.query.upperLeftBound = '41.886811,-87.625624';
  test.request.query.volumeRanks = '1,2,3';
  test.request.query.includeStoreRank = 'Y';
  done();
});

hooks.before('GET /beerStores -> 401', function (test, done) {
  test.request.query.apiKey = 'compass-beer';
  test.request.query.signature = 'INVALID';
  done();
});