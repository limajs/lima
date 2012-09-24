define([
    'dojo/store/Observable',
    'dojo/store/Memory',
    'dojo/request/xhr'
    ], function (
        Observable,
        MemoryStore,
        xhr
    ) {

        return function (url) {
            var queryStore = Observable(new MemoryStore());
            xhr(url, {
                handleAs: 'json'
            }).then(function (data) {
                data.forEach(function (item) {
                    queryStore.add(item);
                });
            });
            return queryStore;
        };
    });
