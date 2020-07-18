import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import PageContainer from "../../container/CustomPage";
import SidebarWrap from "../../container/sidebar";
import BlogDetailsPreviewImage from "./PreviewImage";
import BlogDetailsContent from "./Content";
import BlogDetailsCommentShow from "./CommentShow";
import LeaveAComment from "./LeaveAComment";
import blogDetailsData from '../../data/blog/details';

const TemplateBlogDetailsWithSidebar = ({sidebarPosition}) => {
    return (
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row>
                    <Col xl={9} lg={8} className={`mb-50 ${sidebarPosition === 'left' ? 'order-1 order-lg-2' : ''}`}>
                        <div className='blog-item-details'>
                            <BlogDetailsPreviewImage img={blogDetailsData.preview}/>

                            <BlogDetailsContent
                                title={blogDetailsData.title}
                                meta={blogDetailsData.meta}
                                description={blogDetailsData.description}
                            />
                        </div>

                        <div className="comment-wrap">
                            <h3>Comments</h3>

                            <BlogDetailsCommentShow comments={blogDetailsData.comments}/>

                            <h3>Leave A Comment</h3>

                            <LeaveAComment/>
                        </div>
                    </Col>

                    <Col xl={3} lg={4} className={`${sidebarPosition === 'left' ? 'order-2 order-lg-1' : ''}`}>
                        <SidebarWrap/>
                    </Col>
                </Row>
            </Container>
        </PageContainer>
    );
};

export default TemplateBlogDetailsWithSidebar;