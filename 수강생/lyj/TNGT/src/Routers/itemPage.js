import React from 'react';
import './itemPage.css';
import imageURI from './../globals/imageURI';

const ItemPage = () => {
    return (
        <div className="item_container">
            <div className="contents">
                <div className="cont_tit">
                    <span>[TNGT][T-ROOM]제품이름</span>
                    <div className="sub_star">
                        <img className="star" src={`${imageURI['star1']}`} />
                        <span className="star_num">(555)</span>
                    </div>
                </div>
                <div className="cont_contents">
                    <div className="cont_left">
                        <img className="cont_main_img" src={`${imageURI['ex']}`} />
                        <div className="img_down">
                            <div className="down_tit">
                                <img src={`${imageURI['zoom']}`} />
                            </div>
                            <div className="down_images">
                                <img className="down_img" src={`${imageURI['ex']}`} />
                                <img className="down_img" src={`${imageURI['ex']}`} />
                                <img className="down_img" src={`${imageURI['ex']}`} />
                                <img className="down_img" src={`${imageURI['ex']}`} />
                            </div>
                            <div className="down_icons">
                                <div className="down_icon i1"/>
                                <div className="down_icon i2"/>
                                <div className="down_icon i3"/>
                            </div>
                        </div>
                    </div>
                    <div className="cont_right">
                        <div className="info_box bo1">
                            <div className="info_line1">
                                <div className="info1 sale_tit">판매가</div>
                                <div className="info1 price_boxes">
                                    <div className="info1 price">79,000</div>
                                    <div className="info1 won">원 /</div>
                                    <div className="info1 sale_price">63,200 원</div>
                                </div>
                            </div>
                            <div className="info_line2">
                                <div className="info1 sub_title">
                                    <span>혜택가</span>
                                    <button>혜택내역</button>
                                </div>
                                <div className="info1 sale_price">
                                    <div className="info1 sale_pre">(24%)</div>
                                    <div className="info1 sale_price">60,040 원</div>
                                </div>
                            </div>
                        </div>
                        <div className="info_box bo2">
                            <div className="info2 add_tit">추가혜택안내</div>
                            <div className="info2 card">
                                <span>카드혜택</span>
                                <button>카드무이자안내</button>
                            </div>
                            <div className="info2 mileage">
                                <span>1,100M 적립</span>
                                <button>마일리지안내</button>
                            </div>
                        </div>
                        <div className="info_box bo3">
                            <div className="info3 title">
                                <span className="info3 title">배송구분 / 배송비</span>
                                <span>무료</span>
                            </div>
                            <div className="info3 line2">
                                <span className="info3 title">배송안내</span>
                                <span>05/02(토) 도착예정 (지금 결제 시)</span>
                            </div>
                            <div className="info3 line3">
                                <span className="info3 title">제조사 / 원산지</span>
                                <span>LF / 베트남</span>
                            </div>
                            <div className="info3 line4">
                                <span className="info3 title">상품코드</span>
                                <span>TGSH0B215N2</span>
                            </div>
                        </div>
                        <div className="info_box bo4">
                            <div className="info4 color">
                                <span>색상</span>
                            </div>
                            <div className="info4 size">
                                <div className="size_tit">사이즈</div>
                                <div className="size_box">
                                    <button>074(29)</button>
                                    <button>078(30~31)</button>
                                    <button>082(32)</button>
                                    <button>086(34)</button>
                                    <button>090(35~36)</button>
                                </div>
                                <div className="size_table">
                                    <button>사이즈 조건표</button>
                                </div>
                            </div>
                            <div className="info4 amount">
                                <div className="amount_tit">수량</div>
                                <select>
                                    <option>선택</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>
                        <div className="button_box">
                            <button className="button_buy">
                                <div className="button_icon buy" />
                                <span>구매하기</span>
                            </button>
                            <button className="button_cart">
                                <div className="button_icon cart" />
                                <span>쇼핑백 담기</span>
                            </button>
                            <button className="button_wish">
                                <div className="button_icon wish" />
                                <span>위시리스트</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="side_box">
                    <div className="side_box_tit">
                        <span>최근본상품</span>
                        <span>1</span>
                    </div>
                    <div className="side_box_img"></div>
                    <div className="box_page">
                        <button className="page_before"></button>
                        <div className="page+num">
                            <span>1</span>
                            <span>/1</span>
                        </div>
                        <button className="page_after"></button>
                    </div>
                </div>
            </div>
            <div className="info_contents">
                <div className="info_tit">
                    <div className="info_tit1 big">상품 정보</div>
                    <div className="info_tit2">연관 상품</div>
                    <div className="info_tit3">상품평</div>
                    <div className="info_tit4">반품/교환 안내</div>
                </div>
                <div className="infomaition">
                    <div className="product_info">
                        <div className="product_tit">PRODUCT DETAIL</div>
                        <div className="product_img">

                        </div>
                    </div>
                    <div className="boxx product_shot">
                        <div className="main_pro"></div>
                        <div className="sub_pro">
                            <button className="pro_up">
                                
                            </button>
                            <div className="sub_img">

                            </div>
                            <button className="pro_down">

                            </button>
                        </div>
                    </div>
                    <div className="boxx product_detail">
                        <div className="main_det"></div>
                        <div className="sub_det">
                            <button className="det_up">
                                
                            </button>
                            <div className="det_img">

                            </div>
                            <button className="det_down">

                            </button>
                        </div>
                    </div>
                    <div className="boxx product_fabric">
                        <div className="main_fab"></div>
                        <div className="sub_fab"></div>
                    </div>
                    <div className="boxx product_label">
                        <div className="main_lab"></div>
                        <div className="sub_lab"></div>
                    </div>
                    <div className="product_tip">
                        <div className="tip_tit">
                            TIP
                        </div>
                        <div className="tip_text">
                            성별 : 남성 / 계절 : 봄, 여름
                        </div>
                        <table className="tip_table">
                            <tr>
                                <th>두께감</th>
                                <td className="nocheck">얇아요</td>
                                <td className="check">적당한 편</td>
                                <td className="nocheck">두꺼워요</td>
                            </tr>
                            <tr>
                                <th>신축성</th>
                                <td className="nocheck">신축성이 없어요</td>
                                <td className="check">약간 있어요</td>
                                <td className="nocheck">신축성이 좋아요</td>
                            </tr>
                            <tr>
                                <th>촉감</th>
                                <td className="nocheck">까실한 느낌</td>
                                <td className="check">적당한 느낌</td>
                                <td className="nocheck">부드러운 느낌</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="info_tit">
                <div className="info_tit1">상품 정보</div>
                <div className="info_tit2 big">연관 상품</div>
                <div className="info_tit3">상품평</div>
                <div className="info_tit4">반품/교환 안내</div>
            </div>
            <div className="relation">
                <div className="rel_tit">
                    <span>YOU MAY ALSO LIKE</span>
                    <span>고객님께 추천하는 아이템</span>
                </div>
                <div className="rel_img">
                    <button className="rel_before">

                    </button>
                    <div className="rel_imges">
                        
                    </div>
                    <button className="rel_after">

                    </button>
                </div>
            </div>
            <div className="info_tit">
                <div className="info_tit1">상품 정보</div>
                <div className="info_tit2">연관 상품</div>
                <div className="info_tit3 big">상품평</div>
                <div className="info_tit4">반품/교환 안내</div>
            </div>
            <div className="comment">
                <button className="writing">삼풍평 작성하기</button>
                <div className="comment_table">
                    <div className="table_tit">
                        <div className="tit_left">
                            <span>전체보기(92)</span>
                            <span>포토상품평(25)</span>
                        </div>
                        <div className="tit_right">
                            <select>
                                <option>최근등록순</option>
                                <option>추천순</option>
                            </select>
                        </div>
                    </div>
                    <div className="comment_write">
                        <div className="com_num">1</div>
                        <div className="com_tit">가성비좋고 핏좋고 ...</div>
                        <div className="com_recommend">
                            <span>추천</span>
                        </div>
                        <div className="com_id">ljs*****</div>
                        <div className="com_day">2020-05-04</div>
                        <div className="com_start">

                        </div>
                    </div>
                </div>
                <div className="comment_pagnation">
                    
                </div>
            </div>
            <div className="info_tit">
                <div className="info_tit1">상품 정보</div>
                <div className="info_tit2">연관 상품</div>
                <div className="info_tit3">상품평</div>
                <div className="info_tit4 big">반품/교환 안내</div>
            </div>
            <div className="return">
                <div className="re_tit">
                    <span><strong>>마이페이지</strong>에서 간편하게 <p>반품/교환/취소</p> 시청하기</span>
                    <button>반품/교환/취소 신청</button>
                </div>
                <div className="re_table_tit">
                    반품/교환 안내
                </div>
                <table className="re_table">
                    <tr>
                        <th>반품/교환 배송비는 누가 부담하나요?</th>
                        <td>
                            <ul>
                                <li>단순 변심:<p>고객 부담</p></li>
                                <li>상품의 불량 또는 오배송"TNGT 부담(지정택배사로 발송 필수)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>반품/교환 배송비는 얼마인가요?</th>
                        <td>
                            <ul>
                                <li>최소 배송비 <p>2,500원</p> + 반품/교환 배송비 <p>2,500원</p></li>
                                <li>무료 배송 상품일 경우 반품/교환 시 최최 배송비를 포함한 왕복 배송비 부과</li>
                                <li>부분 취소시, 남은 금액이 무료배송 기준이하일 경우, 최초 배송비를 포함한  왕복 배송비 부과</li>
                                <li>무료 배송 기준: 3만원 이상</li>
                                <li>일부 도서/산간 지역에는 배송비가 추가될 수 있습니다.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>반품/교환은 언제까지 가능한가요?</th>
                        <td>
                            <ul>
                                <li>제품 수령 후 <p>7일 이내</p></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>반품/교환 안되는 경우를 알고 싶어요.</th>
                        <td>
                            <ul>
                                <li>제품 수령 후 <p>7일이 지난 경우</p></li>
                                <li>상품 TAG이 제거되거나, 상품이 훼손된 경우</li>
                                <li>상품을 사용하거나 일부 소비하여 상품의 가치가 현저히 감소된 경우</li>
                                <li>구성품을 분실하였거나 포장 박스 등이 훼손된 경우</li>
                                <li>주문/제작 상품 중 반품/교환이 불가능하다고 안대된 경우</li>
                            </ul>
                        </td>
                    </tr>
                </table>
                <div className="delivery_table">
                    <div className="del_tit">배송 안내</div>
                    <table className="del_table">
                        <tr>
                            <th>배송 기간</th>
                            <td>
                                <ul>
                                    <li>평균 <p>2~3일</p> 소요</li>
                                    <li>물류센터 재고 부족 시, 오프라인 매장에서 재고 확보 후 배송되므로 5~7일이 소요될 수 있습니다.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>배송비</th>
                            <td>
                                <ul>
                                    <li>LF 브랜드 상품 30,000원 이상 무료 배송, 30,000원 이하 배송비 2,500원</li>
                                    <li>입점 업체 상품은 업체 및 상품에 따라 상이, 상품 상세 페이지 참조</li>
                                    <li>일부 도서/산간 지역에는 배송비가 추가될 수 있습니다.</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default ItemPage;
