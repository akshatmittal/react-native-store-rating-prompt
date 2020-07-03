import { Component } from 'react';
import { IProps, IState } from '../Interfaces/IRateModal';
export declare class RateModal extends Component<IProps, IState> {
    static defaultProps: {
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
        starLabels: string[];
        isTransparent: boolean;
    };
    constructor(props: IProps);
    render(): JSX.Element;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    private onStarSelected;
    private renderRateModal;
    private renderRatingView;
    private renderContactFormView;
    private renderReviewError;
    private onClosed;
    private sendRate;
    private sendContactUsForm;
}
