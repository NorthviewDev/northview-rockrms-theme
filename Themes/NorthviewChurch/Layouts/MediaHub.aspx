<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctFeature" ContentPlaceHolderID="feature" runat="server">

  <Rock:Zone Name="Feature" runat="server" />

</asp:Content>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">

	<main id="site-content">

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

        <section class="c-section c-section--light">
          <div class="container">
            <div class="row">
                <div class="col-lg-12">
                  <Rock:Zone Name="Sub Feature Title" runat="server" />
                </div>
            </div>
            <div class="row">
              <div class="col-lg-8">
                <div class="c-section__content">
                  <Rock:Zone Name="Sub Feature" runat="server" />
                </div>
              </div>
              <div class="col-lg-4">
                <Rock:Zone Name="Feature Sidebar" runat="server" />
              </div>
            </div>
          </div>
        </section>
        <section class="c-section" id="contentSwiper" style="overflow: hidden">
            <div class="container">
              <Rock:Zone Name="Content Swiper" runat="server" />
            </div>
        </section>
        <Rock:Zone Name="Main" runat="server" />
        <Rock:Zone Name="Section A" runat="server" />
        <Rock:Zone Name="Section B" runat="server" />
        <Rock:Zone Name="Section C" runat="server" />
        <Rock:Zone Name="Section D" runat="server" />

        <!-- End Content Area -->

	</main>

</asp:Content>