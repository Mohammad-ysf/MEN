import 'package:fitness_app/common/color_extension.dart';
import 'package:fitness_app/common_widget/menu-cell.dart';
import 'package:fitness_app/view/home/home_view.dart';
import 'package:flutter/material.dart';

class MenuView extends StatefulWidget {
  const MenuView({super.key});

  @override
  State<MenuView> createState() => _MenuViewState();
}

class _MenuViewState extends State<MenuView> {
  List menuArr = [
    {"name": "Home", "image": "assets/img/menu_home.png", "tag": "1"},
    {"name": "Weight", "image": "assets/img/menu_weight.png", "tag": "2"},
    {
      "name": "Traning plan",
      "image": "assets/img/menu_traning_plan.png",
      "tag": "3"
    },
    {
      "name": "Training Status",
      "image": "assets/img/menu_traning_status.png",
      "tag": "4"
    },
    {"name": "Meal Plan", "image": "assets/img/menu_meal_plan.png", "tag": "5"},
    {"name": "Schedule", "image": "assets/img/menu_schedule.png", "tag": "6"},
    {"name": "Running", "image": "assets/img/menu_running.png", "tag": "7"},
    {"name": "Exercises", "image": "assets/img/menu_exercises.png", "tag": "8"},
    {"name": "Tips", "image": "assets/img/menu_tips.png", "tag": "9"},
    {"name": "Settings", "image": "assets/img/menu_settings.png", "tag": "10"},
    {"name": "Support", "image": "assets/img/menu_support.png", "tag": "11"},
  ];

  @override
  Widget build(BuildContext context) {
    var media = MediaQuery.sizeOf(context);
    return Scaffold(
      body: NestedScrollView(
        headerSliverBuilder: (context, innerBoxIsScrolled) {
          return [
            SliverAppBar(
              backgroundColor: Colors.black,
              expandedHeight: media.width * 0.6,
              collapsedHeight: kToolbarHeight + 20,
              flexibleSpace: Stack(
                alignment: Alignment.bottomRight,
                children: [
                  Image.asset(
                    "assets/img/1.png",
                    width: media.width,
                    height: media.width * 0.8,
                    fit: BoxFit.cover,
                  ),
                  Container(
                    width: media.width,
                    height: media.width * 0.8,
                    decoration: const BoxDecoration(
                        gradient: LinearGradient(
                            colors: [Colors.transparent, Colors.black],
                            begin: Alignment.topRight,
                            end: Alignment.topLeft)),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 25, vertical: 30),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end, // Align to the right
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Text(" نیما نصراللهی",
                                style: TextStyle(
                                  fontSize: 24,
                                  fontWeight: FontWeight.w800,
                                  color: TColor.white,
                                )),
                            Text(" پروفایل",
                                style: TextStyle(
                                  fontSize: 15,
                                  fontWeight: FontWeight.w200,
                                  color: TColor.white,
                                )),
                          ],
                        ),
                        SizedBox(width: 10), // Add some spacing between text and image
                        Container(
                          decoration: BoxDecoration(
                            color: TColor.white,
                            borderRadius: BorderRadius.circular(27),
                          ),
                          width: 54,
                          height: 54,
                          alignment: Alignment.center,
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(25),
                            child: Image.asset(
                              "assets/img/img.png",
                              width: 50,
                              height: 50,
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
          ];
        },
        body: GridView.builder(
          padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 15),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            crossAxisSpacing: 15,
            mainAxisSpacing: 15,
            childAspectRatio: 1,
          ),
          itemCount: menuArr.length,
          itemBuilder: (context, index) {
            var mObj =
            menuArr.length > index ? menuArr[index] as Map? ?? {} : {};
            return MenuCell(
                mObj: mObj,
                onPressed: () {
                  switch (mObj["tag"].toString()) {
                    case "1":
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const HomeView()));
                      break;
                    default:
                  }
                });
          },
        ),
      ),
    );
  }
}
