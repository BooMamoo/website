app.controller('ApiController', function($scope) {
    $scope.data = [
    	{
    		'method' : 'Get All Local Sites',
    		'description' : 'Get the list of local site in the system.',
    		'request' : [{
    			'method' : 'GET',
    			'url' : '/api/local'
    		}],
    		'body' : [{
    			'body' : 'No',
    			'format' : '-'
    		}], 
    		'response' : [{
    			'status' : '200',
    			'response' : 
    					'[{ \
							"id":"1", \
							"name":"Test" \
						}]'
    		}]
    	},  
    	{
    		'method' : 'Get All Devices by Local Site',
    		'description' : 'Get all devices in a specific local site.',
    		'request' : [{
    			'method' : 'GET',
    			'url' : '/api/local/{local_id}/device'
    		}],
    		'body' : [{
    			'body' : 'No',
    			'format' : '-' 
    		}], 
    		'response' : [{
    			'status' : '200',
    			'response' : 
    					'[{ \
							"id":"1", \
							"name":"Test", \
							"location":"Test", \
							"interval":"2", \
							"local_id":"1" \
						}]'
    		}]
    	}, 
    	{
    		'method' : 'Get Device\'s Information by ID',
    		'description' : 'Get a specific device\'s information by id.',
    		'request' : [{
    			'method' : 'GET',
    			'url' : '/api/device/{device_id}/info'
    		}],
            'header' : [{
                'type' : 'HEAD', 
                'params' : 'Auth-Key', 
                'value' : 'String'
            }],
    		'body' : [{
    			'body' : 'No',
    			'format' : '-' 
    		}], 
    		'response' : [{
    			'status' : '200',
    			'response' : 
    					'[{ \
							"id":"1", \
							"name":"Test", \
							"location":"Test", \
							"interval":"2", \
							"local_id":"1" \
							"mappings":[{ \
								"id":"1", \
								"device_id":"1", \
								"type_id":"1", \
								"unit_id":"1", \
                                "min_threshold":"0", \
                                "max_threshold":"100", \
								"type":{ \
									"id":"1", \
									"type":"Test" \
								}, \
								"standard":{ \
									"id":"1", \
									"type_id":"1", \
									"unit":"Test" \
								} \
							}], \
                            "local":{ \
                                "id":"1", \
                                "name":"Test" \
                            } \
						}]'
    		}, {
                'status' : '401',
                'response' : 'Unauthorized'
            }]
    	}, 
    	{
    		'method' : 'Get Device\'s Data by ID and Type',
    		'description' : 'Get a specific device\'s data by id and type.',
    		'request' : [{
    			'method' : 'GET',
    			'url' : '/api/device/{device_id}/type/{type_id}/data'
    		}],
            'header' : [{
                'type' : 'HEAD', 
                'params' : 'Auth-Key', 
                'value' : 'String'
            }],
    		'body' : [{
    			'body' : 'No',
    			'format' : '-' 
    		}], 
    		'response' : [{
    			'status' : '200',
    			'response' : 
                        '{ \
                            "id":"1", \
                            "name":"Test", \
                            "location":"Test", \
                            "interval":"2", \
                            "local_id":"1" \
                            "standard":[{ \
                                "id":"1", \
                                "type_id":"1", \
                                "unit":"Test", \
                                "type":{ \
                                    "id":"1", \
                                    "type":"Test" \
                                } \
                            }], \
                            "convert":[{ \
                                "id":"1", \
                                "device_id":"1", \
                                "type_id":"1", \
                                "value":"xx.xx", \
                                "timestamp":"xxxx-xx-xx xx:xx:xx" \
                            }] \
                        }'
    		}, {
                'status' : '401',
                'response' : 'Unauthorized'
            }]
    	}, 
    	{
    		'method' : 'Get Device\'s Chart by ID and Type',
    		'description' : 'Get a specific device\'s dairy data by id and type.',
    		'request' : [{
    			'method' : 'GET',
    			'url' : '/api/device/{device_id}/type/{type_id}/chart'
    		}],
            'header' : [{
                'type' : 'HEAD', 
                'params' : 'Auth-Key', 
                'value' : 'String'
            }],
    		'body' : [{
    			'body' : 'No',
    			'format' : '-' 
    		}], 
    		'response' : [{
    			'status' : '200',
    			'response' : 
    					'{ \
                            "id":"1", \
                            "name":"Test", \
                            "location":"Test", \
                            "interval":"2", \
                            "local_id":"1" \
                            "standard":[{ \
                                "id":"1", \
                                "type_id":"1", \
                                "unit":"Test", \
                                "type":{ \
                                    "id":"1", \
                                    "type":"Test" \
                                } \
                            }], \
                            "chart":[{ \
                                "id":"1", \
                                "device_id":"1", \
                                "type_id":"1", \
                                "value":"xx.xx", \
                                "timestamp":"xxxx-xx-xx xx:xx:xx", \
                                "hour":"x" \
                            }], \
                            "threshold":[{ \
                                "min_threshold":"0", \
                                "max_threshold":"100" \
                            }] \
                        }'
    		}, {
                'status' : '401',
                'response' : 'Unauthorized'
            }]
    	}, 
        {
            'method' : 'Get Device\'s Current Data by ID and Type',
            'description' : 'Get a specific device\'s current data by id and type.',
            'request' : [{
                'method' : 'GET',
                'url' : '/api/device/{device_id}/type/{type_id}/current'
            }],
            'header' : [{
                'type' : 'HEAD', 
                'params' : 'Auth-Key', 
                'value' : 'String'
            }],
            'body' : [{
                'body' : 'No',
                'format' : '-' 
            }], 
            'response' : [{
                'status' : '200',
                'response' : 
                        '{ \
                            "id":"1", \
                            "device_id":"1", \
                            "type_id":"1", \
                            "value":"xx.xx", \
                            "timestamp":"xxxx-xx-xx xx:xx:xx" \
                        }'
                }, {
                'status' : '401',
                'response' : 'Unauthorized'
            }]
        }
    ]
});