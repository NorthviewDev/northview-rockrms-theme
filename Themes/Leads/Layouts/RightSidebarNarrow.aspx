<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">

  <main id="site-content">

    <!-- Start Content Area -->
	  <section id="narrow-feature" class="c-block-hero__wrapper no-header">
	    <div class="c-block-hero">
	      <div class="c-block-hero__container">
	        <div class="container">
	          <div class="row">
	            <div class="col-md-8 col-md-offset-2 c-block-hero__header">
	              <div class="l-row--flex">
	                <div class="l-col--flex">
	                  <div class="c-block-hero__content">
	                    <h1 class="c-block-hero__headline"><span><Rock:PageTitle ID="PageTitle" runat="server" /></span></h1>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>      
	      </div>
	    </div><!-- end c-block--hero-->
	  </section>
	  
	  <Rock:Zone Name="Feature" runat="server" />

		<!-- Ajax Error -->
		<div class="alert alert-danger ajax-error no-index" style="display:none">
		    <p><strong>Error</strong></p>
		    <span class="ajax-error-message"></span>
		</div>

		<section class="c-section">
      <div class="container">
        <div class="row">
            <div class="col-md-5 col-md-offset-2">
                <Rock:Zone Name="Main" runat="server" />
            </div>
            <div class="col-md-3">
                <Rock:Zone Name="Sidebar 1" runat="server" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <Rock:Zone Name="Section A" runat="server" />
                <Rock:Zone Name="Section B" runat="server" />
                <Rock:Zone Name="Section C" runat="server" />
                <Rock:Zone Name="Section D" runat="server" />
            </div>
        </div>
      </div>
  	</section>
    <!-- End Content Area -->

  </main>

</asp:Content>
