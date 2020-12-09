import React from 'react';

function Sidebar() {
  return (
    <div>
        <ul class="custom-scrollbar">
            <li>
                <div class="bg-gray-100 flex-center">
                    <img id="menuLogoClient" data-bind="attr:{src: $root.ImagePath}" alt="Company Logo" class="img-fluid"
                         style="max-height:130px; max-width:140px" />
                </div>
            </li>
            <li>
                <ul class="collapsible collapsible-accordion" data-bind="visible: true" style="display: none;" data-tabgroup="4">
                    <li data-bind="if: MenuItems().Home">
                        <a id="home" href="/Login/Home" class="collapsible-header waves-effect tabOrder"><i class="fa fa-home white-text mr-3"></i>Home</a>
                    </li>
                    <li data-bind="if: MenuItems().NewCall">
                        <a id="newCall" href="/Intake/SelectIntake" class="collapsible-header waves-effect tabOrder"><i class="fa fa-phone white-text mr-3"></i>New Intake</a>
                    </li>
                    <li data-bind="if: MenuItems().SearchCalls">
                        <a id="searchCalls" href="/SubmittedIntake" class="collapsible-header waves-effect"><i class="fa fa-search white-text mr-3"></i>Search Intakes</a>
                    </li>
                    <li data-bind="if: MenuItems().ClientManagement">
                        <a href="/ClientManagement" class="collapsible-header waves-effect"><i class="fa fa-building white-text mr-3"></i>Client Management</a>
                    </li>
                    <li data-bind="if: MenuItems().PhoneEscalationManagement">
                        <a href="/PhoneEscalationManagement" class="collapsible-header waves-effect"><i class="fa fa-bullhorn white-text mr-3"></i>Phone Escalations</a>
                    </li>
                    <li data-bind="if: MenuItems().ExternalSystemsManagement" class="active">
                        <a class="collapsible-header waves-effect">
                            <i class="fa fa-server white-text mr-3"></i>
                            External Systems Management
                            <i class="fa fa-angle-down  white-text rotate-icon"></i>
                        </a>
                        <div class="collapsible-body">
                            <ul>
                                <li>
                                    <a href="/ExternalApisManagement" class="collapsible-header waves-effect">External Integrations</a>
                                </li>
                                <li>
                                    <a href="/DecisionsManagement" class="collapsible-header waves-effect">Decisions</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li data-bind="if: MenuItems().UserManagement" class="active">
                        <a class="collapsible-header waves-effect">
                            <i class="fa fa-user-friends white-text mr-3"></i>
                            User Management
                            <i class="fa fa-angle-down  white-text rotate-icon"></i>
                        </a>
                        <div class="collapsible-body">
                            <ul>
                                <li>
                                    <a href="/UserManagement" class="collapsible-header waves-effect">Web Users</a>
                                </li>
                                <li>
                                    <a href="/SharedLoginManagement" class="collapsible-header waves-effect">Shared Logins</a>
                                </li>
                                <li>
                                    <a href="/GroupManagement" class="collapsible-header waves-effect">Group Management</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li data-bind="if: MenuItems().AnnouncementManagement">
                        <a href="/AnnouncementManagement" class="collapsible-header waves-effect"><i class="fa fa-bullhorn white-text mr-3"></i>Announcement Mgmt</a>
                    </li>
                    <li data-bind="if: MenuItems().Transactions">
                        <a href="/Transactions" class="collapsible-header waves-effect"><i class="fa fa-database white-text mr-3"></i>Transactions</a>
                    </li>
                    <li data-bind="if: MenuItems().DisplayDNA">
                        <a data-bind="attr:{href: MenuItems().DnaUrl }" target="_blank" id="DNAUrl" class="collapsible-header waves-effect"><i class="fa fa-dna white-text mr-3"></i>DNA</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;