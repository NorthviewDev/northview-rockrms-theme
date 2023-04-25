<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">
<Rock:Zone Name="Feature" runat="server" />

	<main class="container">

        <!-- Start Content Area -->

                <!-- Ajax Error -->
                <div class="alert alert-danger ajax-error no-index" style="display:none">
                  <div class="row">
                    <div class="col-md-12">
                      <p><strong>Error</strong></p>
                      <span class="ajax-error-message"></span>
                    </div>
                  </div>
                </div>

                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <Rock:Zone Name="Main" runat="server" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <Rock:Zone Name="Section A" runat="server" />
                    </div>
                </div>
                <Rock:Zone Name="Section B" runat="server" />
                <Rock:Zone Name="Section C" runat="server" />
                <Rock:Zone Name="Section D" runat="server" />

                <div class="row">
                    <div class="col-md-8 center-block">
                        <Rock:Zone Name="Section E" runat="server" />
                    </div>
                </div>

                <!-- End Content Area -->

	</main>

</asp:Content>

