<template>
  <div>
    <Breadcrumbs main="" title="File Manager" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 pe-sm-0 box-col-12">
          <div class="file-sidebar">
            <div class="card">
              <div class="card-body">
                <ul>
                  <li>
                    <div class="btn btn-primary">
                      <vue-feather type="home"></vue-feather>
                      Home
                    </div>
                  </li>
                  <li>
                    <div class="btn btn-light">
                      <vue-feather type="folder"></vue-feather>
                      All
                    </div>
                  </li>
                  <li>
                    <div class="btn btn-light">
                      <vue-feather type="clock"></vue-feather>
                      Recent
                    </div>
                  </li>
                  <li>
                    <div class="btn btn-light">
                      <vue-feather type="star"></vue-feather>
                      Starred
                    </div>
                  </li>
                  <li>
                    <div class="btn btn-light">
                      <vue-feather type="alert-circle"></vue-feather>
                      Recovery
                    </div>
                  </li>
                  <li>
                    <div class="btn btn-light">
                      <vue-feather type="trash-2"></vue-feather>
                      Deleted
                    </div>
                  </li>
                </ul>
                <hr />
                <ul>
                  <li>
                    <div class="btn btn-outline-primary">
                      <vue-feather type="database"></vue-feather> Storage
                    </div>
                    <div class="m-t-15">
                      <div class="progress sm-progress-bar mb-1">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 25%"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>25 GB of 100 GB used</p>
                    </div>
                  </li>
                </ul>
                <hr />
                <ul>
                  <li>
                    <div class="btn btn-outline-primary">
                      <vue-feather type="grid"></vue-feather> Pricing plan
                    </div>
                  </li>
                  <li>
                    <div class="pricing-plan">
                      <h6>Trial Version</h6>
                      <h5>FREE</h5>
                      <p>100 GB Space</p>
                      <div class="btn btn-outline-primary btn-xs">Selected</div>
                      <img
                        class="bg-img"
                        src="/images/dashboard/folder.png"
                        alt=""
                      />
                    </div>
                  </li>
                  <li>
                    <div class="pricing-plan">
                      <h6>Premium</h6>
                      <h5>$5/month</h5>
                      <p>200 GB Space</p>
                      <div class="btn btn-outline-primary btn-xs">
                        Contact Us
                      </div>
                      <img
                        class="bg-img"
                        src="../assets/images/dashboard/folder1.png"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-md-12 box-col-12">
          <div class="file-content">
            <div class="card">
              <div class="card-header">
                <div class="media">
                  <form class="form-inline" action="#" method="get">
                    <div class="form-group mb-0">
                      <i class="fa fa-search"></i>
                      <input
                        class="form-control-plaintext"
                        type="text"
                        placeholder="Search..."
                      />
                    </div>
                  </form>
                  <div class="media-body text-end">
                    <form
                      class="d-inline-flex"
                      action="#"
                      method="POST"
                      enctype="multipart/form-data"
                      name="myForm"
                    >
                      <div class="btn btn-primary" onclick="getFile()">
                        <vue-feather type="plus-square" class="text-top"></vue-feather>
                        Add New
                      </div>
                      <div style="height: 0px; width: 0px; overflow: hidden">
                        <input
                          id="upfile"
                          type="file"
                          onchange="sub(this)"
                        />
                      </div>
                    </form>
                    <div class="btn btn-outline-primary ms-2">
                      <vue-feather type="upload" class="text-top"></vue-feather> Upload
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body file-manager">
                <h4 class="mb-3">All Files</h4>
                <h6>Recently opened files</h6>
                <ul class="files">
                  <li class="file-box">
                    <div class="file-top">
                      <i class="fa fa-file-image-o txt-primary"></i
                      ><i class="fa fa-ellipsis-v f-14 ellips"></i>
                    </div>
                    <div class="file-bottom">
                      <h6>Logo.psd</h6>
                      <p class="mb-1">2.0 MB</p>
                      <p><b>last open : </b>1 hour ago</p>
                    </div>
                  </li>
                  <li class="file-box">
                    <div class="file-top">
                      <i class="fa fa-file-archive-o txt-secondary"></i
                      ><i class="fa fa-ellipsis-v f-14 ellips"></i>
                    </div>
                    <div class="file-bottom">
                      <h6>Project.zip</h6>
                      <p class="mb-1">1.90 GB</p>
                      <p><b>last open : </b>1 hour ago</p>
                    </div>
                  </li>
                  <li class="file-box">
                    <div class="file-top">
                      <i class="fa fa-file-excel-o txt-success"></i
                      ><i class="fa fa-ellipsis-v f-14 ellips"></i>
                    </div>
                    <div class="file-bottom">
                      <h6>Backend.xls</h6>
                      <p class="mb-1">2.00 GB</p>
                      <p><b>last open : </b>1 hour ago</p>
                    </div>
                  </li>
                  <li class="file-box">
                    <div class="file-top">
                      <i class="fa fa-file-text-o txt-info"></i
                      ><i class="fa fa-ellipsis-v f-14 ellips"></i>
                    </div>
                    <div class="file-bottom">
                      <h6>requirements.txt</h6>
                      <p class="mb-1">0.90 KB</p>
                      <p><b>last open : </b>1 hour ago</p>
                    </div>
                  </li>
                </ul>
                <h6 class="mt-4">Folders</h6>
                <ul class="folder">
                  <li class="folder-box">
                    <div class="media">
                      <i class="fa fa-file-archive-o f-36 txt-warning"></i>
                      <div class="media-body ms-3">
                        <h6 class="mb-0">Endless admin</h6>
                        <p>204 files, 50mb</p>
                      </div>
                    </div>
                  </li>
                  <li class="folder-box">
                    <div class="media">
                      <i class="fa fa-folder f-36 txt-warning"></i>
                      <div class="media-body ms-3">
                        <h6 class="mb-0">Endless admin</h6>
                        <p>101 files, 10mb</p>
                      </div>
                    </div>
                  </li>
                  <li class="folder-box">
                    <div class="media">
                      <i class="fa fa-file-archive-o f-36 txt-warning"></i>
                      <div class="media-body ms-3">
                        <h6 class="mb-0">Endless admin</h6>
                        <p>25 files, 2mb</p>
                      </div>
                    </div>
                  </li>
                  <li class="folder-box">
                    <div class="media">
                      <i class="fa fa-folder f-36 txt-warning"></i>
                      <div class="media-body ms-3">
                        <h6 class="mb-0">Endless admin</h6>
                        <p>108 files, 5mb</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <h6 class="mt-4">Files</h6>
                <ul class="files">
                  <li class="file-box">
                    <div class="file-top">
                      <i class="fa fa-file-archive-o txt-secondary"></i
                      ><i class="fa fa-ellipsis-v f-14 ellips"></i>
                    </div>
                    <div class="file-bottom">
                      <h6>Project.zip</h6>
                      <p class="mb-1">1.90 GB</p>
                      <p><b>last open : </b>1 hour ago</p>
                    </div>
                  </li>
                  <li class="file-box">
                    <div class="file-top">
                      <i class="fa fa-file-excel-o txt-success"></i
                      ><i class="fa fa-ellipsis-v f-14 ellips"></i>
                    </div>
                    <div class="file-bottom">
                      <h6>Backend.xls</h6>
                      <p class="mb-1">2.00 GB</p>
                      <p><b>last open : </b>1 hour ago</p>
                    </div>
                  </li>
                  <li class="file-box">
                    <div class="file-top">
                      <i class="fa fa-file-text-o txt-info"></i
                      ><i class="fa fa-ellipsis-v f-14 ellips"></i>
                    </div>
                    <div class="file-bottom">
                      <h6>requirements.txt</h6>
                      <p class="mb-1">0.90 KB</p>
                      <p><b>last open : </b>1 hour ago</p>
                    </div>
                  </li>
                  <li class="file-box">
                    <div class="file-top">
                      <i class="fa fa-file-text-o txt-primary"></i
                      ><i class="fa fa-ellipsis-v f-14 ellips"></i>
                    </div>
                    <div class="file-bottom">
                      <h6>Logo.psd</h6>
                      <p class="mb-1">2.0 MB</p>
                      <p><b>last open : </b>1 hour ago</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      filtered: false,
    }
  },
  methods:{
    collapseFilter(){
            this.filtered=!this.filtered
        }
  }
}
</script>