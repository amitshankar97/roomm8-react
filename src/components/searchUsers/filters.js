import React, { Component } from 'react';

class Filters extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <aside className="col-sm-4" >
                        <br />
                        <div className="card">
                            <article className="card-group-item">
                                <header className="card-header">
                                    <h6 className="title">Cleanliness </h6>
                                </header>
                                <div className="filter-content">
                                    <div className="card-body">
                                        <div className="custom-control custom-checkbox">
                                            <span className="float-right badge badge-light round">52</span>
                                            <input type="checkbox" className="custom-control-input" id="Check1" />
                                            <label className="custom-control-label" htmlFor="Check1">messy</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <span className="float-right badge badge-light round">112</span>
                                            <input type="checkbox" className="custom-control-input" id="Check2" />
                                            <label className="custom-control-label" htmlFor="Check2">neat</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <span className="float-right badge badge-light round">36</span>
                                            <input type="checkbox" className="custom-control-input" id="Check3" />
                                            <label className="custom-control-label" htmlFor="Check3">extreamely neat</label>
                                        </div> 
			                        </div> 
		                        </div>
	                        </article> 
                                            
	                        <article className="card-group-item">
                                <header className="card-header">
                                    <h6 className="title">Social Habits </h6>
                                </header>
                                <div className="filter-content">
                                    <div className="card-body">
                                        <div className="custom-control custom-checkbox">
                                            <span className="float-right badge badge-light round">139</span>
                                            <input type="checkbox" className="custom-control-input" id="Check1" />
                                            <label className="custom-control-label" htmlFor="Check1">go out to parties</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <span className="float-right badge badge-light round">50</span>
                                            <input type="checkbox" className="custom-control-input" id="Check2" />
                                            <label className="custom-control-label" htmlFor="Check2">host parties at home</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <span className="float-right badge badge-light round">3</span>
                                            <input type="checkbox" className="custom-control-input" id="Check3" />
                                            <label className="custom-control-label" htmlFor="Check3">alcohol free</label>
                                        </div>
			                        </div> 
		                        </div>
                            </article>

                            <article className="card-group-item">
                                <header className="card-header">
                                    <h6 className="title">Smoking </h6>
                                </header>
                                <div className="filter-content">
                                    <div className="card-body">
                                        <div className="custom-control custom-checkbox">
                                            <span className="float-right badge badge-light round">68</span>
                                            <input type="checkbox" className="custom-control-input" id="Check1" />
                                            <label className="custom-control-label" htmlFor="Check1">never</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <span className="float-right badge badge-light round">29</span>
                                            <input type="checkbox" className="custom-control-input" id="Check2" />
                                            <label className="custom-control-label" htmlFor="Check2">outside</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <span className="float-right badge badge-light round">34</span>
                                            <input type="checkbox" className="custom-control-input" id="Check3" />
                                            <label className="custom-control-label" htmlFor="Check3">inside</label>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </aside>
                </div>
            </div> 
                                                        
        );
    }
}
                                                        
                                                        
export default Filters;