import { ViewStyle } from 'react-native';

export interface IProps {
	modalTitle: string;
	cancelButtonText: string;
	totalStarCount: number;
	defaultStars: number;
	emptyCommentErrorMessage: string;
	isVisible: boolean;
	isModalOpen: boolean;
	commentPlaceholderText: string;
	rateButtonText: string;
	sendButtonText: string;
	storeRedirectThreshold: number;
	onStarSelected: (e: number) => void;
	onClosed: () => void;
	onSendReview: () => void;
	sendContactUsForm: (state: IState) => void;
	playStoreURL?: string;
	iTunesStoreURL?: string;
	style: ViewStyle;
	starLabels: string[];
	isTransparent: boolean;
}
export interface IState {
	rating: number;
	showContactForm: boolean;
	review: string;
	reviewError: boolean;
	isModalOpen: boolean;
}
