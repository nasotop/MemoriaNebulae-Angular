'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">memoria-nebulae-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AdminComponent.html" data-type="entity-link" >AdminComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminDashboardComponent.html" data-type="entity-link" >AdminDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthLayoutComponent.html" data-type="entity-link" >AuthLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AvatarComponent.html" data-type="entity-link" >AvatarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardComponent.html" data-type="entity-link" >CardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardFooterComponent.html" data-type="entity-link" >CardFooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormErrorComponent.html" data-type="entity-link" >FormErrorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IndexComponent.html" data-type="entity-link" >IndexComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LinkComponent.html" data-type="entity-link" >LinkComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginFormComponent.html" data-type="entity-link" >LoginFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainContentComponent.html" data-type="entity-link" >MainContentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarBrandComponent.html" data-type="entity-link" >NavbarBrandComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarCollapseComponent.html" data-type="entity-link" >NavbarCollapseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarComponent.html" data-type="entity-link" >NavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarLinkComponent.html" data-type="entity-link" >NavbarLinkComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarTogglerComponent.html" data-type="entity-link" >NavbarTogglerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PersonalInformationComponent.html" data-type="entity-link" >PersonalInformationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link" >ProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecoveryComponent.html" data-type="entity-link" >RecoveryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecoveryFormComponent.html" data-type="entity-link" >RecoveryFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterComponent.html" data-type="entity-link" >RegisterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterFormComponent.html" data-type="entity-link" >RegisterFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SecurityComponent.html" data-type="entity-link" >SecurityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidebarComponent.html" data-type="entity-link" >SidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StoryCardComponent.html" data-type="entity-link" >StoryCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StoryContainerComponent.html" data-type="entity-link" >StoryContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StoryFormComponent.html" data-type="entity-link" >StoryFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabContentComponent.html" data-type="entity-link" >TabContentComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/LinkModel.html" data-type="entity-link" >LinkModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StoryPostModel.html" data-type="entity-link" >StoryPostModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});