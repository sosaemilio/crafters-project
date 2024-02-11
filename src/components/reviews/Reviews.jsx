'use client';

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatings from "react-star-ratings";

export default function Reviews ({reviewContent}) {
  return (
    <div className="container-sm p-3 mx-0">
        <div className="row">
            <div className="col d-inline w-auto p-3">
                <article className="rounded-2 border 
                shadow-sm p-3 pb-4 bg-body-tertiary">
                    <div className="row align-items-center">
                        <div className="col-auto w-auto h-auto">
                            <img
                            className="img-fluid  rounded-circle"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlhJREFUWEftlumKKjEQhavdUHHHfd/w/R/EN3BBRQVX3MBdhxNI0L7t3KQzF4ZL1z/tdPL1OZWqMtrt9pN+cRgOoKY7joKaApKjoKOgrgK67/8/ORgOh6larZLP5xOiHA4H6na7dL/fPwpVq9UokUiI55fLhUajEW23WylxlRTMZrOUy+XI5XKxzZ/PJ83ncxqPx5aHmdc/Hg+aTCbsHdlQAsSm9Xqd4vG42P96vdJwOPxDEbPi+Jj1ek2DwUCWja1TBvT7/QwyEAiIg/b7PfV6PWG12+1mayKRiFhzPB6p3+/T6XT6t4DYPZVKUaFQIIAgYB1sg30IPMtkMmQYBvt9u92YypvNRgnOloL8BFwYJD+HQPLDPkBXKhXyeDyW8KqEyhbzA6ysxs30er0UDAYFx263o06no8ol1tsGxA5QsFQqCbXMFOfzmZUh1bx73UcLEBsVi0VKp9PCar45aiNycrFY2FZPKwf5qVY3FiVltVqxi6Eb2goCoNlsUjQafWNBPsJe3dAGzOfzrKTw7sKBUHpmsxlNp1MtRi1Aq/78SqPad62+xDagVe6hpCBeOwj+Qwf5bqD4TmLbgOgWuL3cWq4WDkOhRj1E4MLAat5lVP22BYgL8Qrxq1odrMWtDYVCb93i1UasaTQahBzlITM7/kgOlstlSiaTojB/GrdisdhbT4bVy+WSDasqoWQxwNA5+BTzt/wydxlcFAy3AJUNaUCZOdB8KD6k1Wq9DQ+qc6E0oHm8+mStGdI8UKhO1tKAspb89DoHUFdRR0FHQV0FdN93clBXwS//67Ow5VghtgAAAABJRU5ErkJggg=="
                            alt="user"
                        />
                        </div>
                        <div className="col p-0">
                            <div className="d-flex flex-column">
                                <p className="fs-5 mb-0">Verified Buyer</p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center my-2">
                        <div className="ratings col-auto align-items-center">
                            {/* <StarRatings
                                rating={5}
                                starRatedColor="#ffb829"
                                numberOfStars={5}
                                starDimension="18px"
                                starSpacing="1px"
                                name="rating"
                            /> */}
                        </div>
                    </div>

                    <p className="row mb-2 text-secondary">
                        {reviewContent}
                    </p>
                </article>
            </div>
        </div> 
    </div>
  );
};
