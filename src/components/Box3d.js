import '../styles/box3d.css'

function Box3d() {
    return (
        <div class="page">
            <div class="container">
                <div class="shadow-wrapper">
                    <div class="shadow">
                        <div>&nbsp;</div>
                    </div>
                </div>
                <div class="box-wrapper">
                    <div class="box-faces">
                        <div class="box-face box-face--is-front">
                            <p>
                                <i class="icon-rocket icon-4x"></i>
                            </p>
                        </div>
                        <div class="box-face box-face--is-back">
                            <p>
                                <i class="icon-rocket icon-4x"></i>
                            </p>
                        </div>
                        <div class="box-face box-face--is-top">&nbsp;</div>
                        <div class="box-face box-face--is-bottom">&nbsp;</div>
                        <div class="box-face box-face--is-left">
                            <p>
                                <i class="icon-rocket icon-4x"></i>
                            </p>
                        </div>
                        <div class="box-face box-face--is-right">
                            <p>
                                <i class="icon-rocket icon-4x"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Box3d;