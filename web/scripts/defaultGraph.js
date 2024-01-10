export const defaultGraph = {
	"last_node_id": 11,
	"last_link_id": 10,
	"nodes": [
		{
			"id": 10,
			"type": "LoadImage",
			"pos": [
				36,
				62
			],
			"size": {
				"0": 315,
				"1": 314
			},
			"flags": {},
			"order": 0,
			"mode": 0,
			"outputs": [
				{
					"name": "IMAGE",
					"type": "IMAGE",
					"links": [
						10
					],
					"shape": 3,
					"slot_index": 0
				},
				{
					"name": "MASK",
					"type": "MASK",
					"links": null,
					"shape": 3
				}
			],
			"properties": {
				"Node name for S&R": "LoadImage"
			},
			"widgets_values": [
				"example.png",
				"image"
			]
		},
		{
			"id": 11,
			"type": "PreviewImage",
			"pos": [
				485,
				63
			],
			"size": [
				210,
				246
			],
			"flags": {},
			"order": 1,
			"mode": 0,
			"inputs": [
				{
					"name": "images",
					"type": "IMAGE",
					"link": 10
				}
			],
			"properties": {
				"Node name for S&R": "PreviewImage"
			}
		}
	],
	"links": [
		[
			10,
			10,
			0,
			11,
			0,
			"IMAGE"
		]
	],
	"groups": [],
	"config": {},
	"extra": {},
	"version": 0.4
}