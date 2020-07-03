# React Native Store Rating Prompt

## Stores Supported:
| **Apple App Store**  |   **Google Play**  |  
:--------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | 
| **✓** | **✓** | 

## Getting started
```shell
$ npm install react-native-store-rating-prompt
```

## Usage
Users are presented with a modal allowing them to choose amount of stars which is defined with `totalStarCount` prop.

The star rate taken from the users is compared to the value defined in `storeRedirectThreshold`. If this value is greater than the value of `storeRedirectThreshold`, the user is directed to the App store or Google Play Store. If it is equal and smaller, comment popup will be opened and users will be allowed to type a comment.

## Props

| Properties            			| Required 	| Type      | Description | Default         |
| -                     			|	-        	| -         | -           | -               |
| **playStoreURL**						| yes 			| `string`  | Google Play Store App URL <br> `market://details?id=${APP_PACKAGE_NAME}` | | 
| **iTunesStoreURL**					| yes 			| `string`  | Apple ITunes App URL <br> `itms-apps://itunes.apple.com/app/${APP_ID}`| | 
| **sendContactUsForm** 			| yes				| `function`| Function fired when send bottom click | Argument: `{ isModalOpen: true, rating: 3, review: "Lorem ipsum dolor sit amet...", reviewError:false, showContactForm:true }` | 
| **onSendReview** 						| no				| `function`| Function called when the user it sent for review | | 
| **modalTitle** 							| no				| `string` 	| The modal header title    | `"How many stars do you give to this app?"`        | 
| **rateButtonText**  						| no				| `string` 	| The button text.    | `"Rate"`        |
| **cancelButtonText**  					| no 				| `string`  | The cancel button text.  | `"Cancel"`  | 
| **totalStarCount**   				| no				| `number`  | The starts count on modal.   | `5` | 
| **defaultRating**						| no				| `number` 	| Default Rating               |  `5` | 
| **isVisible**   						| no    		| `boolean` | Shows rating on modal. | ` true`   | 
| **sendButtonText** 						| no 				| `string`  | The text of send button. | `"Send"` |  
| **commentPlaceholderText** 	| no 				| `string` 	| User review modal placeholder text. | `"You can write your comments here"` | 
| **isTransparent**						| no				| `boolean` | Background style | `true` | 
| **starLabels**  						| no				| `array` 	| The array of rating title. | `['Terrible', 'Bad', 'Okay', 'Good', 'Great']` | 
| **emptyCommentErrorMessage**| no 				| `string`  | User review comment box validation text | `"Please specify your opinion."` | 
| **isModalOpen** 						| no 				| `boolean` | Control if the modal open or not. | `false` | 
| **storeRedirectThreshold** 	| no 				| `number`  | Minimum rating threshold for redirect | `3` | 
| **style** 									| no 				| `object`  | Additional Modal Styles. | | 
| **onStarSelected** 					| no 				| `function`| Function fired when the rating has changed.| `return: number` | 
| **onClosed** 								| no 				| `function`| Function fired when the modal has closed.| `console.warn('pressed cancel button...')` | 

#### Notes

This is a more up-to-date fork of [react-native-store-rating](https://github.com/pankod/react-native-store-rating).